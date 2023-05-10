<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/5v5z5r1wQz5i5y083ekQ6wRt8dbzUuwcEoKI/" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">
        Open Modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="wrapper">
                    <div class="card-custom-pm">
                        <!-- Your original code goes here -->
                        <!-- Add the close button in the top-right corner -->
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9gybBud7M4J4HwId/fs5m+6jjG9XAs9z4UZM6pWK6brU1l5yI3C" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-GLhlTQ8iVG93xBfZlPH94m5bscu3
html += "<div class='modal fade' id='productModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
html += "<div class='modal-dialog modal-xl modal-dialog-centered modal-fit-content'>";
html += "<div class='modal-content'>";
html += "<div class='wrapper'>";
html += "<div class='card-custom-pm'>";
html += "<div class='product-left'>";
html += "<div class='header'>";
html += "<h1 id='customTitle'>Toro SLing Chair</h1>";
html += "<h2 id='custom'>Popular</h2>";
html += "</div>";
html += "<div class='product-main'>";
html += "<ul class='nav nav-tabs' id='myTab' role='tablist'>";
html += "<li class='nav-item' role='presentation'>";
html += "<button class='nav-link active' id='description-tab' data-bs-toggle='tab' data-bs-target='#description' type='button' role='tab' aria-controls='description' aria-selected='true'>Description</button>";
html += "</li>";
html += "<li class='nav-item' role='presentation'>";
html += "<button class='nav-link' id='details-tab' data-bs-toggle='tab' data-bs-target='#details' type='button' role='tab' aria-controls='details' aria-selected='false'>Details</button>";
html += "</li>";
html += "</ul>";
html += "<div class='tab-content' id='myTabContent'>";
html += "<div class='tab-pane fade show active' id='description' role='tabpanel' aria-labelledby='description-tab'>";
html += "<p id='customDescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem quam vel, delectus expedita ullam asperiores laudantium modi. Voluptatum eum cum quis ea modi. Reiciendis asperiores aut beatae odit minima.</p>";
html += "</div>";
html += "<div class='tab-pane fade' id='details' role='tabpanel' aria-labelledby='details-tab'>";
html += "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem quam vel, delectus expedita ullam asperiores laudantium modi. Voluptatum eum cum quis ea modi. Reiciendis asperiores aut beatae odit minima.</p>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "<div class='product-details'>";
html += "<div class='product-total'>";
html += "<h4>Status: <span id='customStatus' class='badge bg-success'>Available</span></h4>";
html += "<h4>Lead Time: <span><i>at least 3 weeks</i></span></h4>";
html += "</div>";
html += "</div>";
html += "<div class='product-btns'>";
html += "<a href='#' class='product-add'>Add To Cart</a>";
html += "</div>";
html += "</div>";
html += "<div class='product-right'>";
html += "<img src='https://dummyimage.com/600x700/dee2e6/6c757d.jpg' alt=''>";
html += "</div>";
html += "</div>";
html += "<button type='button' class='btn-close position-absolute top-0 end-0 m-3' data-bs-dismiss='modal' aria-label='Close'></button>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "</div>";
html += "<img class='new-product-image' src='" + items[i].ProductImage0.Url + "'>";
html += "<div class='card-body'>";
html += "<h5 class='card-title'>" + items[i].Title + "</h5>";
html += "<p class='card-text card-description-text'>" + items[i].Description + "</p>";
console.log(_spPageContextInfo.webAbsoluteUrl);
html += "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#productModal'>Open Modal</button>";
html += "</div></div></div>";
html += "</div></div></div>";














