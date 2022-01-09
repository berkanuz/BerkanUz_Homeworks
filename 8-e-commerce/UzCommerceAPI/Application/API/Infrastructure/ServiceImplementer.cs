using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace UzCommerce.Application.API.Infrastructure
{
    public static class ServiceImplementer
    {
        public static void AddValidationFormatter(this IServiceCollection services)
        {
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var responseModel = new ApiResponseModel<string>();
                    var details = new ValidationProblemDetails(context.ModelState);
                    responseModel.ValidationErrors = details.Errors;

                    return new BadRequestObjectResult(responseModel)
                    {
                        ContentTypes = { "application/problem+json", "application/problem+xml" },
                        StatusCode = 400
                    };
                };
            });
        }
    }
}
