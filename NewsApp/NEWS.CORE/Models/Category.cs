namespace NEWS.CORE.Models
{
    public partial class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? ParentId { get; set; }
        public int? Status { get; set; }
    }
}
