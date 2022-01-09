using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UzCommerce.Business.Engines.Models.Product
{
    public class ProductOverViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string PriceText => Price + " TL";
        public string PictureUrl { get; set; }
    }
}
