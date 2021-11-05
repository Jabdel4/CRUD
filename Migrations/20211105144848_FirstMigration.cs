using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Noms = table.Column<string>(type: "varchar(50)", nullable: false),
                    Prenoms = table.Column<string>(type: "varchar(50)", nullable: false),
                    Sexe = table.Column<string>(type: "char(1)", nullable: false),
                    Adresse = table.Column<string>(type: "varchar(30)", nullable: false),
                    Description = table.Column<string>(type: "varchar(100)", nullable: false),
                    DateEnrollement = table.Column<DateTime>(type: "Datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
