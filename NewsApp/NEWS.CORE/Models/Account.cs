using System.ComponentModel.DataAnnotations;

namespace NEWS.CORE.Models
{
    public partial class Account
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int? PermissionId { get; set; }
        public int? Status { get; set; }
    }
}
