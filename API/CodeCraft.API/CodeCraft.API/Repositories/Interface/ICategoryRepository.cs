﻿using CodeCraft.API.Models.Domain;

namespace CodeCraft.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
    }
}