package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the HomePage!")
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
	port := os.Getenv("PORT")
	if port == "" {
		print("No PORT env was found, set to default 3000\n")
		port = "3000"
	}
	http.HandleFunc("/", homePage)
	res := fmt.Sprintf(":%s", port)
	log.Fatal(http.ListenAndServe(res, nil))
}

func main() {
	handleRequests()
}
