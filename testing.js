table users {
    id INT [pk, not null, increment]
    email VARCHAR(200) [NOT NULL, UNIQUE]
    password VARCHAR(200) [NOT NULL]
    phone_number VARCHAR(200) [NOT NULL, UNIQUE]
    birth VARCHAR(200) [NOT NULL]
    nick_name VARCHAR(200) [NOT NULL, UNIQUE]
    created_at TIMESTAMP [default: "now()", NOT NULL]
    updated_at TIMESTAMP [default: "now()", NULL]
  }
  
  table products {
    id INT [pk, not null, increment]
    name VARCHAR(200) [NOT NULL, UNIQUE]
    capacity_ml VARCHAR(200) [NOT NULL]
    description VARCHAR(1000) [NULL]
    detail VARCHAR(2000) [NULL]
    price DECIMAL [NOT NULL]
    sweetness VARCHAR(200) [NULL]
    sourness VARCHAR(200) [NULL]
    carbon VARCHAR(200) [NULL]
    alchol VARCHAR(200) [NOT NULL]
    categories_id INT [NOT NULL]
    created_at TIMESTAMP [default: "now()", NOT NULL]
    updated_at TIMESTAMP [default: "now()", NULL]
  }
  
  table details {
    id INT [pk, not null, increment]
    description VARCHAR(2000) [NULL]
    product_id INT [NOT NULL]
  }
  
  table desc_images {
    id INT [pk, not null, increment]
    image_url VARCHAR(2000) [NULL]
    detail_id INT [NOT NULL]
  }
  
  
  table sweetness {
    id INT [pk, not null, increment]
    sweetness VARCHAR(200) [NULL]
    product_id INT [NOT NULL]
  }
  
  table sourness {
    id INT [pk, not null, increment]
    sourness VARCHAR(200) [NULL]
    product_id INT [NOT NULL]
  }
  
  table carbon {
    id INT [pk, not null, increment]
    carbon VARCHAR(200) [NULL]
    product_id INT [NOT NULL]
  }
  
  table categories {
    id INT [pk, not null, increment]
    product_id INT [NOT NULL]
    name VARCHAR(100) [NOT NULL, UNIQUE]
  }
  
  table comments {
    id INT [pk, not null, increment]
    title VARCHAR(200) [NOT NULL]
    content VARCHAR(1000) [NULL]
    rating DECIMAL [NOT NULL]
    user_id INT [NOT NULL]
    product_id INT [NOT NULL]
    created_at TIMESTAMP [default: "now()", NOT NULL]
    updated_at TIMESTAMP [default: "now()", NULL]
  }
  
  table cart {
    id INT [pk, not null, increment]
    user_id INT [NOT NULL]
    product_id INT [NOT NULL]
    quantity INT [NOT NULL]
    created_at TIMESTAMP [default: "now()", NOT NULL]
    updated_at TIMESTAMP [default: "now()", NULL]
  }
  
  table comments_img {
    id INT [pk, not null, increment]
    image_url VARCHAR(1000)
    comment_id INT [NOT NULL]
    created_at TIMESTAMP [default: "now()", NOT NULL]
    updated_at TIMESTAMP [default: "now()", NULL]
  }
  
  table product_img {
    id INT [pk, not null, increment]
    image_url VARCHAR(1000)
    product_id VARCHAR [NOT NULL]
  }
  
  table main_ingre {
    id INT [pk, not null, increment]
    product_id INT [NOT NULL]
    fruit VARCHAR [NULL]
    flower VARCHAR [NULL]
    grain VARCHAR [NULL]
    etc VARCHAR [NULL]
  }
  
  //추가구현 
  // table setItems {
  //   id INT [pk, not null, increment]
  //   title VARCHAR [NOT NULL]
  //   descriptions VARCHAR(2000) [NOT NULL]
  //   price DECIMAL [NOT NULL] 
  //   products_id INT [NOT NULL]
  //   created_at TIMESTAMP [default: "now()", NOT NULL]
  //   updated_at TIMESTAMP [default: "now()", NULL]
  // }
  
  // table setItemsImg {
  //   id INT [pk, not null, increment]
  //   image_url VARCHAR(1000) [NOT NULL]
  //   setItems_id VARCHAR [NOT NULL]
  // }
  
  
  // table orderedList {
  //   id INT [pk, not null, increment]
  //   user_id INT [NOT NULL]
  //   product_id INT [NOT NULL]
  //   created_at TIMESTAMP [default: "now()", NOT NULL]
  //   updated_at TIMESTAMP [default: "now()", NULL]
  // }
  
  
  Ref: "users"."id" < "comments"."user_id"
  
  Ref: "products"."id" < "comments"."product_id"
  
  Ref: "users"."id" < "cart"."user_id"
  
  Ref: "products"."id" < "cart"."product_id"
  
  Ref: "categories"."id" < "products"."categories_id"
  
  Ref: "comments"."id" < "comments_img"."comment_id"
  
  Ref: "products"."id" < "product_img"."product_id"
  
  // Ref: "products"."id" < "setItems"."products_id"
  
  // Ref: "setItems"."id" < "setItemsImg"."setItems_id"
  
  Ref: "products"."id" - "main_ingre"."product_id"
  
  // Ref: "users"."id" < "orderedList"."user_id"
  
  // Ref: "products"."id" < "orderedList"."product_id"
  
  Ref: "categories"."product_id" < "products"."id"
  
  Ref: "products"."id" < "sourness"."product_id"
  
  Ref: "products"."id" < "sweetness"."product_id"
  
  Ref: "products"."id" < "carbon"."product_id"
  
  Ref: "products"."id" - "details"."product_id"
  
  Ref: "details"."id" < "desc_images"."detail_id"