using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IZCommerce.CatalogService.APP.API
{
    public class ApiResponseModel<TData>
    {
        public ApiResponseModel()
        {
            Data = default;
            IsSuccess = true;
            ValidationErrors = new Dictionary<string, string[]>();
        }
        public TData Data { get; set; }
        public IDictionary<string, string[]> ValidationErrors { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }
        [JsonIgnore]
        public bool IsSuccess { get; set; }
    }

    public class ApiResponseModel : ApiResponseModel<object>
    {
        public ApiResponseModel() : base()
        {
        }
    }
}
