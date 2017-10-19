require 'middleman-gh-pages'

ENV["ALLOW_DIRTY"] = "true"
ENV["BRANCH_NAME"] = "master"
ENV["PROJECT_ROOT"] = "_site"
ENV["BUILD_DIR"] = "build"

task :ghpublish do
    Rake::Task['publish'].invoke
end
