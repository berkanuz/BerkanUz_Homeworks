using System.Collections.Generic;

namespace UzCommerce.Business.Engines.Models
{
    public class EngineResponseModel<TData>
    {
        public EngineResponseModel()
        {
            Data = default;
            Errors = new List<string>();
            ValidationErrors = new Dictionary<string, string[]>();
        }
        public TData Data { get; set; }
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }
        public IDictionary<string, string[]> ValidationErrors { get; set; }
    }
}
