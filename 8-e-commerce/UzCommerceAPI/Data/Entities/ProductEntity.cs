using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("Products")]
    public class ProductEntity : BaseEntity
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public int CategoryId { get; set; }
        public virtual CategoryEntity Category { get; set; }
        public bool Deleted { get; set; }

    }
}
