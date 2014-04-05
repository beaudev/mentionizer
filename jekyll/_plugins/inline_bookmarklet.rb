require 'uglifier'

module Jekyll
  class InlineJavascriptTag < Liquid::Tag
    COMPILE_OPTIONS = {
      mangle: {
        toplevel: true,
        sort: true
      }
    }

    def render(context)
      compiled = Uglifier.compile(File.read("bookmarklet.js"), COMPILE_OPTIONS)
      "javascript:#{compiled.gsub("\"", "'")}"
    end
  end
end

Liquid::Template.register_tag('inline_bookmarklet', Jekyll::InlineJavascriptTag)
