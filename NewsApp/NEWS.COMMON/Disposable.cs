using System;

namespace NEWS.COMMON
{
    public class Disposable
    {
        /// <summary>
        /// Freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        private bool _isDispose;
        ~Disposable()
        {
            Dispose(false);
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (_isDispose && disposing)
            {
                DisposeCore();
            }
            _isDispose = true;
        }
        protected virtual void DisposeCore()
        {

        }
    }
}
