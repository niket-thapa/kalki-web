export default function ThemeScript() {
  const codeToRunOnClient = `
(function() {
  try {
    // Clear any saved theme preference to always follow system
    localStorage.removeItem('theme');
    
    function applyTheme() {
      // Always follow system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Remove dark class first to ensure clean state
      document.documentElement.classList.remove('dark');
      
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
    
    // Apply theme immediately before any rendering
    applyTheme();
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
      document.documentElement.classList.remove('dark');
      if (e.matches) {
        document.documentElement.classList.add('dark');
      }
    });
  } catch (e) {
    console.error('Error applying theme:', e);
  }
})()
  `.trim();

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}

