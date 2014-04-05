require 'rubygems'
require 'bundler/setup'

require 'json'
require 'open-uri'

$:.unshift(File.dirname(__FILE__) + "/lib")

require 'analyzer'

html = File.read('foo.html')
puts Analyzer.new(html).users.map(&:username).inspect

# .fn[itemprop='author']
# meta[name='author']

# User score = occurrences * followers * multiplier
# Multiplier = 2 if link is in the http://twitter.com/madeofcode format or meta tag twitter:creator

# Potential methods
# Check each A tag for urls pointing to twitter

