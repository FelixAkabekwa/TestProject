using Microsoft.AspNetCore.Mvc;

namespace Asp.NetCore_REACT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ActivityController : ControllerBase
    {
         private static readonly string[] Actions = new[] {"Sleeping", "Dancing", "Singing", "Learning", "Football", "Jogging", "Swimming", "Party"};

        private readonly ILogger<ActivityController> _logger;

        public ActivityController(ILogger<ActivityController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return Enumerable.Range(1, 10).Select(index => new Activity
            {
                Id = index,
                Date = DateTime.Now.AddDays(index),
                Action = Actions[Random.Shared.Next(Actions.Length)]
            })
            .ToArray();
        }
    }
}