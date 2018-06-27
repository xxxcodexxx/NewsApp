using System.Security.Cryptography;
using System.Text;

namespace NEWS.WEB.Models
{
    public class Encryption
    {
        public static string Encrypt(string encript)
        {

            SHA1CryptoServiceProvider sh = new SHA1CryptoServiceProvider();
            sh.ComputeHash(ASCIIEncoding.ASCII.GetBytes(encript));
            byte[] re = sh.Hash;
            StringBuilder sb = new StringBuilder();
            foreach (byte b in re)
            {
                sb.Append(b.ToString("x2"));
            }
            return sb.ToString();
        }
    }
}