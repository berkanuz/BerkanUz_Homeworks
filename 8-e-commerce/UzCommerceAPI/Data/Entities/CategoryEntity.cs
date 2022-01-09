using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("Categories")]
    public class CategoryEntity : BaseEntity
    {
        public string Name { get; set; }
        public bool Deleted { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ProductEntity> Products { get; set; }
    }
}
