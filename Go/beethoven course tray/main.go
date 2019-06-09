package main

import (
	"net/http"

	"github.com/robfig/cron"

	"github.com/PuerkitoBio/goquery"
	"github.com/getlantern/systray"
	"github.com/getlantern/systray/example/icon"
)

type state struct {
	Price string
	Cron  *cron.Cron
}

func main() {
	s := &state{}
	systray.Run(s.onStart, s.onExit)
}

func (s *state) onStart() {
	s.updatePrice()
	s.Cron = cron.New()
	s.Cron.AddFunc("@every 30s", s.updatePrice)
	s.Cron.Start()
}

func (s *state) onExit() {}

func (s *state) updatePrice() {
	url := "https://coinmarketcap.com/currencies/bitcoin/"
	res, err := http.Get(url)

	if err != nil {
		return
	}

	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return
	}

	price := doc.Find(".details-panel-item--price__value").Text()
	systray.AddMenuItem("BTC $:"+price, "Fist")
	systray.SetTitle("BTC $:" + price)
	systray.SetIcon(icon.Data)
}
