#!/usr/bin/env ruby

require 'open-uri'


def open_page(page)
open(page) {|src|
  open(page,"wb") {|dst|
      dst.write(src.read)
  }
}
end
