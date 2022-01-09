using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("OrderItems")]
    public class OrderItemEntity : BaseEntity
    {
        public int OrderId { get; set; }
        public virtual OrderEntity Order { get; set; }
        public int ProductId { get; set; }
        public virtual ProductEntity Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
