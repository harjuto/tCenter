package server

import (
	"net/http"
	"log"
)

func main() {


	http.Handle("/image", func (res http.ResponseWriter, req http.Request) {
		log.Printf("Hello world")
	})

	http.ListenAndServe(":8888", nil)

}