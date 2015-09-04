# Require any additional compass plugins here.
require 'compass-normalize'

# Set this to the root of your project when deployed:
Encoding.default_external = 'utf-8'
http_path = "/"
css_dir = ""
sass_dir = ""

http_path = (environment == :production) ? "ideal-image-slider" : ""
http_images_path = "../img/"
http_generated_images_path = "../img/"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = (environment == :production) ? :false : :true
