using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("CartItems")]
    public class CartItemEntity : BaseEntity
    {
        public int ProductId { get; set; }
        public virtual ProductEntity Product { get; set; }
        public int Quantity { get; set; }
    }
}
