
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FacebookSection = () => {
  return (
    <div className="mt-16 text-center">
      <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-white">Sekite mus Facebook</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-4">
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/profile.php?id=61578020543147" 
              data-tabs="timeline" 
              data-width="300" 
              data-height="200" 
              data-small-header="false" 
              data-adapt-container-width="true" 
              data-hide-cover="false" 
              data-show-facepile="true"
            >
              <blockquote 
                cite="https://www.facebook.com/profile.php?id=61578020543147" 
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=61578020543147" target="_blank" rel="noopener noreferrer">
                  Alfa Reklama Facebook
                </a>
              </blockquote>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Facebook SDK */}
      <div id="fb-root"></div>
      <script 
        async 
        defer 
        crossOrigin="anonymous" 
        src="https://connect.facebook.net/lt_LT/sdk.js#xfbml=1&version=v18.0"
      ></script>
    </div>
  );
};
