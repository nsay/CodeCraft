using CodeCraft.API.Data;
using CodeCraft.API.Models.Domain;
using CodeCraft.API.Models.DTO;
using CodeCraft.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodeCraft.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoriesController(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        // POST: localhost:XXXX/api/categories
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCateogoryRequestDTO request)
        {
            // Map DTO to Domain Model
            var category = new Category
            {
                Name = request.Name,
                UrlHandle = request.UrlHandle,
            };

            await categoryRepository.CreateAsync(category);

            //Domain Model to DTO
            var response = new CategoryDTO
            {
                Id = category.Id,
                Name = category.Name,
                UrlHandle = category.UrlHandle,
            };

            return Ok(response);
        }

        // GET: localhost:XXXX/api/categories
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await categoryRepository.GetAllAsync();

            //Domain Model to DTO
            var response = new List<CategoryDTO>();
            foreach (var category in categories)
            {
                response.Add(new CategoryDTO
                {
                    Id = category.Id,
                    Name = category.Name,
                    UrlHandle = category.UrlHandle,
                });
            }

            return Ok(response);
        }
    }
}
