using System.ComponentModel.DataAnnotations;

namespace UzCommerce.Business.Engines.Models.Order
{
    public class OrderCreateModel
    {
        public AddressModel Address { get; set; }
        [Required(ErrorMessage ="Payment method required!")]
        public string SelectedPaymentMethod { get; set; }
    }
}
