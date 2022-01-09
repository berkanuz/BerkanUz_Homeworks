using IZCommerce.CatalogService.APP.API;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UzCommerce.Application.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseController : Controller
    {
        protected ApiResponseModel<T> ApiResponse<T>(ApiResponseModel<T> response)
        {
            if (!response.IsSuccess)
            {
                Response.StatusCode = StatusCodes.Status500InternalServerError;
            }
            else if (HasError(response.ValidationErrors, response.Errors))
            {
                Response.StatusCode = StatusCodes.Status400BadRequest;
            }
            return response;
        }
        protected ApiResponseModel ApiResponse(ApiResponseModel response)
        {
            if (!response.IsSuccess)
            {
                Response.StatusCode = StatusCodes.Status500InternalServerError;
            }
            else if (HasError(response.ValidationErrors, response.Errors))
            {
                Response.StatusCode = StatusCodes.Status400BadRequest;
            }
            return response;
        }
        private bool HasError(IDictionary<string, string[]> validationErrors, List<string> errors)
        {
            if ((validationErrors != null && validationErrors.Any()) || (errors != null && errors.Any()))
            {
                return true;
            }
            return false;
        }
    }
}
