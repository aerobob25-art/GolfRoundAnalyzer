using Microsoft.EntityFrameworkCore;
using GolfRoundAnalyzer.Api.Data;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(Options =>
{
    Options.AddPolicy("LocalDevelopment", policy =>
    {
        policy.WithOrigins(new string[] { "http://localhost:5173", "http://127.0.0.1:5173" })
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.UseCors("LocalDevelopment");

app.MapControllers();

app.Run();