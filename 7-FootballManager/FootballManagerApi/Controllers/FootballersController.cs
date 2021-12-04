using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FootballersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FootballersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Footballers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Footballer>>> GetFootballers()
        {
            return Ok(await _unitOfWork.FootballerService.GetAllAsync());
        }

        // GET: api/Footballers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Footballer>> GetFootballer(int id)
        {
            return await _unitOfWork.FootballerService.GetAsync(id);
        }

        // PUT: api/Footballers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFootballer(int id, Footballer footballer)
        {
            await _unitOfWork.FootballerService.UpdateAsync(id, footballer);

            return NoContent();
        }

        // POST: api/Footballers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Footballer>> PostFootballer(Footballer footballer)
        {
            await _unitOfWork.FootballerService.CreateAsync(footballer);

            return CreatedAtAction("GetFootballer", new { id = footballer.Id }, footballer);
        }

        // DELETE: api/Footballers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFootballer(int id)
        {

            await _unitOfWork.FootballerService.DeleteAsync(id);
            return NoContent();
        }


    }
}
