using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UzCommerce.Business.Engines.Models.Order
{
    public class AddressModel
    {
        [Required(ErrorMessage ="Name Required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Surname Required")]
        public string Surname { get; set; }
        [Required(ErrorMessage = "Phone Required")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "AddressDescription Required")]
        public string AddressDescription { get; set; }
    }
}
