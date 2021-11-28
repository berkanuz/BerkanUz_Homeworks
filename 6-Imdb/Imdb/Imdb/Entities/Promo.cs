using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imdb.Entities
{
    public class Promo
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int MovieId { get; set; }
    }
}
