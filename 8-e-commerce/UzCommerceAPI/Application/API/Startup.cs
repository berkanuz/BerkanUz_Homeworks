using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UzCommerce.Application.API.Infrastructure;
using UzCommerce.Business.Engines.Infrastructure;
using UzCommerce.Data.DAL.Infrastructure;

namespace UzCommerce.Application.API
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDAL(Configuration);
            services.AddEngines();
            services.AddValidationFormatter();

            services.AddCors(options =>
             options.AddDefaultPolicy(builder =>
             builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseRouting();

            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
