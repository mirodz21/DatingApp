using API.Data;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;
using API.Services;

namespace API.Extensions

{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            
            services.AddDbContext<DataContext>(opt =>
                {
                     opt.UseSqlite(config.GetConnectionString("DefaultConnections"));
                });
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            
            return services;
        }
    }
}