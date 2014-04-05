namespace :jekyll do
  desc "Build the site into the main directory"
  task :build do
    sh "rm -rf assets img index.html"
    Dir.chdir("jekyll") do
      sh "rm -rf _site"
      sh "jekyll build"
      sh "cp -r _site/* .."
    end
  end
end

task default: 'jekyll:build'

