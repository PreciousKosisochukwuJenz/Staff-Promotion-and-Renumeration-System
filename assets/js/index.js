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

$("#CreateUserBtn").click((event) => {
  event.preventDefault();

  const prefix = "#create";
  const username = $(prefix + "username").val();
  const email = $(prefix + "email").val();
  const password = $(prefix + "password").val();
  const passwordSalt = $(prefix + "passwordSalt").val();

  const request = {
    url: `http://localhost:3000/api/users/`,
    method: "POST",
    data: { username, email, password, passwordSalt },
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
    $(prefix + "username").val(response.user.username);
    $(prefix + "email").val(response.user.email);
    $(prefix + "id").val(response.user._id);
  });
});

$("#UpdateUserBtn").click((event) => {
  event.preventDefault();
  const id = $("#editid").val();

  const prefix = "#edit";
  const username = $(prefix + "username").val();
  const email = $(prefix + "email").val();

  const request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: "PUT",
    data: { username, email },
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
  const description = $(prefix + "description").val();

  const request = {
    url: `http://localhost:3000/api/roles/`,
    method: "POST",
    contentType: "application/json;charset:utf-8",
    data: { description },
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
    url: `http://localhost:3000/api/roles/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    $(prefix + "description").val(response.role.description);
    $(prefix + "id").val(response.role._id);
  });
});

$("#UpdateRoleBtn").click((event) => {
  event.preventDefault();
  const id = $("#editid").val();
  const prefix = "#edit";
  const description = $(prefix + "description").val();

  const request = {
    url: `http://localhost:3000/api/roles/${id}`,
    method: "PUT",
    data: { description },
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

$("#LoginBtn").click(function (event) {
  event.preventDefault();

  $("#LoginForm").submit();
});
