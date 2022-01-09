using System.ComponentModel.DataAnnotations;

namespace UzCommerce.Business.Engines.Models.Category
{
    public class CategoryInsertModel
    { 
        [Required(ErrorMessage = "Category Name is required!")]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
