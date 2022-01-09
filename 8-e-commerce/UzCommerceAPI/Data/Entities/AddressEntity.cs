using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UzCommerce.Data.Entities
{
    [Table("Addresses")]
    public class AddressEntity : BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Phone { get; set; }
        public string AddressDescription { get; set; }
    }
}
