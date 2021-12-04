using System;
using System.Collections.Generic;
using FootballManagerApi.EntityBases;

using System.Linq;
using System.Threading.Tasks;

namespace FootballManagerApi.Entities
{
    public class Position : IEntity
    {
        public string Name { get; set; }
        public ICollection<Footballer> Footballers { get; set; }
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
