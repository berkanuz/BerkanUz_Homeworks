using FootballManagerApi.Entities;
using FootballManagerApi.UnitOfWork;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FootballManagerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoachesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CoachesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Coaches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Coach>>> GetCoaches()
        {
            return Ok(await _unitOfWork.CoachService.GetAllAsync());
        }

        // GET: api/Coaches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Coach>> GetCoach(int id)
        {
            return await _unitOfWork.CoachService.GetAsync(id);
        }

        // PUT: api/Coaches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoach(int id, Coach coach)
        {
            await _unitOfWork.CoachService.UpdateAsync(id, coach);
            return NoContent();
        }

        // POST: api/Coaches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coach>> PostCoach(Coach coach)
        {
            await _unitOfWork.CoachService.CreateAsync(coach);
            return CreatedAtAction("GetCoach", new { id = coach.Id }, coach);
        }

        // DELETE: api/Coaches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoach(int id)
        {
            await _unitOfWork.CoachService.DeleteAsync(id);
            return NoContent();
        }


    }
}
