using Imdb.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Imdb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AwardsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public AwardsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAward()
        {
            var award = _dbContext.Prizes.ToList();

            return Ok(award);
        }

        [HttpPost]
        public IActionResult AddAward([FromBody] Prize prize)
        {
            _dbContext.Prizes.Add(prize);
            _dbContext.SaveChanges();
            return Ok();
        }


        [HttpPut]
        public IActionResult UpdateAward([FromBody] Prize prize)
        {
            _dbContext.Prizes.Update(prize);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IActionResult RemoveAward([FromBody] Prize prize)
        {
            _dbContext.Prizes.Remove(prize);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}
