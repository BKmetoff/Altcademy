# frozen_string_literal: true

class NewsController < ApplicationController
  def index
    # @articles = Article.all
    @articles = [
      {
        title: 'Facing scrutiny, Facebook reportedly hired a PR firm that wrote',
        content: 'Facebook expanded its relationship with a Washington-based public relations firm last year that wrote dozens of articles critical of rivals Google'
      },
      {
        title: "Jim Acosta row: Donald Trump threat over reporters' behaviour",
        content: "Mr Acosta's press pass was taken after he clashed with the president during a news conference earlier this month. Mr Trump played down the ruling, saying it"
      },
      {
        title: 'Stephen Barclay named new Brexit Secretary',
        content: 'Stephen Barclay has been picked as the new Brexit secretary, as Theresa May seeks to fill her cabinet after several of her top team quit.'
      }
    ]
  end
end
