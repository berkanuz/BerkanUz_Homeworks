using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using UzCommerce.Business.Engines.Infrastructure;
using UzCommerce.Data.DAL;
using UzCommerce.Data.DAL.UnitOfWork;

namespace UzCommerce.Application.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var serviceScope = host.Services.CreateScope())
            {
                var services = serviceScope.ServiceProvider;
                var context = services.GetRequiredService<ApplicationEFContext>();
                
               //context.Database.EnsureDeleted(); //delete DB
               context.Database.Migrate(); //auto migration
                

                var unitOfWork = services.GetRequiredService<IUnitOfWork>();
                ServiceInitializer.SeedData(unitOfWork);
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
