$("#setting").submit(function (event) {
  event.preventDefault();

  const unindexed_array = $(this).serializeArray();
  const data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  const request = {
    url: `http://localhost:3000/api/settings`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Settings Updated Successfully!");
    location.reload();
  });
});

$("#UpdateRoleBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;

  const prefix = "#edit";
  const description = $(prefix + ".description").val();

  const request = {
    url: `http://localhost:3000/api/roles/${id}`,
    method: "PUT",
    contentType: "application/json;charset:utf-8",
    data: JSON.stringify({ description }),
  };

  $.ajax(request).done(function (response) {
    alert(response.message);
    location.reload();
  });
});

$(".DeleteRoleBtn").click((event) => {
  event.preventDefault();
  const confirmed = confirm("Are you sure?");
  if (confirmed) {
    const id = event.target.dataset.id;

    const request = {
      url: `http://localhost:3000/api/roles/${id}`,
      method: "DELETE",
    };

    $.ajax(request).done(function (response) {
      alert(response.message);
      location.reload();
    });
  }
});

$("#LoginBtn").submit(function (event) {
  console.log("reach");
  event.preventDefault();

  const unindexed_array = $(this).serializeArray();
  const data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  const request = {
    url: `http://localhost:3000/auth/login`,
    method: "POST",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Settings Updated Successfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}

$("#CreateUserBtn").click((event) => {
  event.preventDefault();

  const prefix = "#create";
  const username = $(prefix + ".username").val();
  const email = $(prefix + ".email").val();
  const password = $(prefix + ".password").val();
  const passwordSalt = $(prefix + ".passwordSalt").val();

  const request = {
    url: `http://localhost:3000/api/users/`,
    method: "POST",
    contentType: "application/json;charset:utf-8",
    data: JSON.stringify({ username, email, password, passwordSalt }),
  };

  console.log(request);

  $.ajax(request).done(function (response) {
    alert(response.message);
    location.reload();
  });
});

$(".EditUserBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    $(prefix + ".username").val(response.user.username);
    $(prefix + ".email").val(response.user.password);
  });
});

$("#UpdateUserBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;

  const prefix = "#edit";
  const username = $(prefix + ".username").val();
  const email = $(prefix + ".email").val();

  const request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: "PUT",
    contentType: "application/json;charset:utf-8",
    data: JSON.stringify({ username, email }),
  };

  $.ajax(request).done(function (response) {
    alert(response.message);
    location.reload();
  });
});

$(".DeleteUserBtn").click((event) => {
  event.preventDefault();
  const confirmed = confirm("Are you sure?");
  if (confirmed) {
    const id = event.target.dataset.id;

    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    $.ajax(request).done(function (response) {
      alert(response.message);
      location.reload();
    });
  }
});

$("#CreateRoleBtn").click((event) => {
  event.preventDefault();

  const prefix = "#create";
  const description = $(prefix + ".description").val();

  const request = {
    url: `http://localhost:3000/api/roles/`,
    method: "POST",
    contentType: "application/json;charset:utf-8",
    data: JSON.stringify({ description }),
  };

  $.ajax(request).done(function (response) {
    alert(response.message);
    location.reload();
  });
});

$(".EditRoleBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `http://localhost:3000/api/role/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    $(prefix + ".description").val(response.role.description);
  });
});
