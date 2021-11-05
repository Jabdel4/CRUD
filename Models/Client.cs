using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD.Models
{
    public class Client
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Noms { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Prenoms { get; set; }

        [Required]
        [Column(TypeName = "char(1)")]
        public char Sexe { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Adresse { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "Datetime")]
        public DateTime DateEnrollement { get; set; }
    }
}
