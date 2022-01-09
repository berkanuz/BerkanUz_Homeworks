using System.ComponentModel.DataAnnotations;

namespace UzCommerce.Business.Engines.Models.Product
{
    public class ProductCreateModel
    {
        [Required(ErrorMessage = "Product Name Required!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Product Price Required!")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "Product Picture Required!")]
        public string PictureUrl { get; set; }
        public int CategoryId { get; set; }

    }
}
