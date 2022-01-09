using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("Orders")]
    public class OrderEntity : BaseEntity
    {
        public int AddressId { get; set; }
        public virtual AddressEntity Address { get; set; }
        public string PaymentMethod { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public decimal OrderTotal { get; set; }
        public virtual ICollection<OrderItemEntity> OrderItems { get; set; }
    }
}
