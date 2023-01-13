const url = "https://sprm.herokuapp.com";
// const url = "http://localhost:3000";

$("#setting").submit(function (event) {
  event.preventDefault();

  const unindexed_array = $(this).serializeArray();
  const data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  const request = {
    url: `${url}/api/settings`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
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
    url: `${url}/api/users/`,
    method: "POST",
    data: { username, email, password, passwordSalt },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".EditUserBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `${url}/api/users/${id}`,
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
    url: `${url}/api/users/${id}`,
    method: "PUT",
    data: { username, email },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

function setId(event) {
  const id = event.target.dataset.id;
  $("#modal-danger")[0].dataset.id = id;
}
$(".DeleteUserBtn").click((event) => {
  event.preventDefault();

  const id = $("#modal-danger")[0].dataset.id;

  const request = {
    url: `${url}/api/users/${id}`,
    method: "DELETE",
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-danger").modal("hide");
    $("#modal-success").modal("show");
  });
});

$("#CreateRoleBtn").click((event) => {
  event.preventDefault();

  const prefix = "#create";
  const description = $(prefix + "description").val();

  const request = {
    url: `${url}/api/roles/`,
    method: "POST",
    data: { description },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".EditRoleBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `${url}/api/roles/${id}`,
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
    url: `${url}/api/roles/${id}`,
    method: "PUT",
    data: { description },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".DeleteRoleBtn").click((event) => {
  event.preventDefault();

  const id = $("#modal-danger")[0].dataset.id;

  const request = {
    url: `${url}/api/roles/${id}`,
    method: "DELETE",
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-danger").modal("hide");
    $("#modal-success").modal("show");
  });
});

$("#CreateStaffBtn").click((event) => {
  event.preventDefault();
  let staffType;
  const prefix = "#create";
  const classPrefix = ".create";
  const name = $(prefix + "name").val();
  const email = $(prefix + "email").val();
  const designation = $(prefix + "designation").val();
  const staffTypeProps = $(classPrefix + "staffType");
  $.each(staffTypeProps, (i, staffTypeProp) => {
    if (staffTypeProp.checked) staffType = staffTypeProp.value;
  });
  const request = {
    url: `${url}/api/staffs/`,
    method: "POST",
    data: { name, email, designation, staffType },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".EditStaffBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `${url}/api/staffs/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    const classPrefix = ".edit";
    $(prefix + "name").val(response.staff.name);
    $(prefix + "email").val(response.staff.email);
    $(prefix + "designation").val(response.staff.designation);
    $(prefix + "id").val(response.staff._id);
    const staffTypeProps = $(classPrefix + "staffType");
    $.each(staffTypeProps, (i, staffTypeProp) => {
      if (staffTypeProp.value === response.staff.staffType)
        staffTypeProp.checked = true;
    });
  });
});

$("#UpdateStaffBtn").click((event) => {
  event.preventDefault();
  let staffType;
  const id = $("#editid").val();
  const prefix = "#edit";
  const classPrefix = ".edit";
  const name = $(prefix + "name").val();
  const email = $(prefix + "email").val();
  const designation = $(prefix + "designation").val();
  const staffTypeProps = $(classPrefix + "staffType");
  $.each(staffTypeProps, (i, staffTypeProp) => {
    if (staffTypeProp.checked) staffType = staffTypeProp.value;
  });

  const request = {
    url: `${url}/api/staffs/${id}`,
    method: "PUT",
    data: { name, email, staffType, designation },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".DeleteStaffBtn").click((event) => {
  event.preventDefault();

  const id = $("#modal-danger")[0].dataset.id;

  const request = {
    url: `${url}/api/staffs/${id}`,
    method: "DELETE",
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-danger").modal("hide");
    $("#modal-success").modal("show");
  });
});

$("#CreateDepartmentBtn").click((event) => {
  event.preventDefault();

  const prefix = "#create";
  const title = $(prefix + "title").val();
  const description = $(prefix + "description").val();

  const request = {
    url: `${url}/api/departments/`,
    method: "POST",
    data: { title, description },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".EditDepartmentBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `${url}/api/departments/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    $(prefix + "title").val(response.department.title);
    $(prefix + "description").val(response.department.description);
    $(prefix + "id").val(response.department._id);
  });
});

$("#UpdateDepartmentBtn").click((event) => {
  event.preventDefault();
  const id = $("#editid").val();
  const prefix = "#edit";
  const title = $(prefix + "title").val();
  const description = $(prefix + "description").val();

  const request = {
    url: `${url}/api/departments/${id}`,
    method: "PUT",
    data: { title, description },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".DeleteDepartmentBtn").click((event) => {
  event.preventDefault();

  const id = $("#modal-danger")[0].dataset.id;

  const request = {
    url: `${url}/api/departments/${id}`,
    method: "DELETE",
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-danger").modal("hide");
    $("#modal-success").modal("show");
  });
});

$("#CreateDesginationBtn").click((event) => {
  event.preventDefault();
  let staffType;
  const prefix = "#create";
  const classPrefix = ".create";
  const title = $(prefix + "title").val();
  const description = $(prefix + "description").val();
  const staffTypeProps = $(classPrefix + "staffType");
  $.each(staffTypeProps, (i, staffTypeProp) => {
    if (staffTypeProp.checked) staffType = staffTypeProp.value;
  });
  const salary = $(prefix + "salary").val();
  const department = $(prefix + "department").val();
  const benetfitsRows = $("#createbenefitTbl")[0].children;
  let benefits = [];
  $.each(benetfitsRows, (i, row) => {
    const benefit =
      row.children[0].children[0].children[0].children[0].innerText;
    const amount =
      row.children[1].children[0].children[0].children[0].innerText;
    benefits.push({ amount, benefit });
  });

  const request = {
    url: `${url}/api/designations/`,
    method: "POST",
    data: { title, description, staffType, salary, department, benefits },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".EditDesignationBtn").click((event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  const request = {
    url: `${url}/api/designations/${id}`,
    method: "GET",
  };

  $.ajax(request).done(function (response) {
    const prefix = "#edit";
    const classPrefix = ".edit";
    $(prefix + "title").val(response.designation.title);
    $(prefix + "description").val(response.designation.description);
    const staffTypeProps = $(classPrefix + "staffType");
    $.each(staffTypeProps, (i, staffTypeProp) => {
      if (staffTypeProp.value === response.designation.staffType)
        staffTypeProp.checked = true;
    });
    $(prefix + "salary").val(response.designation.salary);
    $(prefix + "department").val(response.designation.department);
    $(prefix + "id").val(response.designation._id);
    $.each(response.designation.benefits, (i, benefit) => {
      const html = `<tr> <td data-label="Name">
                    <div class="d-flex py-1 align-items-center">
                      <div class="flex-fill">
                        <div class="font-weight-medium">
                        ${benefit.benefit}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                   <div class="d-flex py-1 align-items-center">
                      <div class="flex-fill">
                        <div class="font-weight-medium">
                         ${benefit.amount}
                        </div>
                      </div>
                    </div>
                  </td>
                   <td>
                     <button class="btn btn-danger deleteBenefit" type="button">Remove </button>
                  </td>
                  </tr>`;

      $("#editbenefitTbl").append(html);
    });
  });
});

$("#UpdateDesignationBtn").click((event) => {
  event.preventDefault();
  let staffType;
  const id = $("#editid").val();
  const prefix = "#edit";
  const classPrefix = ".edit";
  const title = $(prefix + "title").val();
  const description = $(prefix + "description").val();
  const staffTypeProps = $(classPrefix + "staffType");
  $.each(staffTypeProps, (i, staffTypeProp) => {
    if (staffTypeProp.checked) staffType = staffTypeProp.value;
  });
  const benetfitsRows = $("#editbenefitTbl")[0].children;
  let benefits = [];
  $.each(benetfitsRows, (i, row) => {
    const benefit =
      row.children[0].children[0].children[0].children[0].innerText;
    const amount =
      row.children[1].children[0].children[0].children[0].innerText;
    benefits.push({ amount, benefit });
  });
  const salary = $(prefix + "salary").val();
  const department = $(prefix + "department").val();
  const request = {
    url: `${url}/api/designations/${id}`,
    method: "PUT",
    data: { title, description, staffType, salary, department, benefits },
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});

$(".DeleteDesignationBtn").click((event) => {
  event.preventDefault();

  const id = $("#modal-danger")[0].dataset.id;

  const request = {
    url: `${url}/api/designations/${id}`,
    method: "DELETE",
  };

  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-danger").modal("hide");
    $("#modal-success").modal("show");
  });
});

$("#LoginBtn").click(function (event) {
  event.preventDefault();

  $("#LoginForm").submit();
});

$(".addBenefit").click(function (e) {
  const command = e.target.dataset.command;
  const benefit = $("#" + command + "benefit").val();
  const amount = $("#" + command + "amount").val();

  if (amount != "" && benefit != "") {
    const html = `<tr> <td data-label="Name">
                    <div class="d-flex py-1 align-items-center">
                      <div class="flex-fill">
                        <div class="font-weight-medium">
                        ${benefit}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                   <div class="d-flex py-1 align-items-center">
                      <div class="flex-fill">
                        <div class="font-weight-medium">
                         ₦${amount}
                        </div>
                      </div>
                    </div>
                  </td>
                   <td>
                     <button class="btn btn-danger deleteBenefit" type="button">Remove </button>
                  </td>
                  </tr>`;

    $("#" + command + "benefitTbl").append(html);
  } else {
    alert("Benefit and amount must not be empty");
  }
});

$(".deleteBenefit").click(function (e) {
  debugger;
  const row = e.target.parentNode.parentNode.parentNode;
});

$("#searchBtn").click(function () {
  const staffId = $("#staffId").val();
  const request = {
    url: `${url}/api/staffs/byId`,
    method: "POST",
    data: { staffId },
  };
  $.ajax(request).done(function (response) {
    $("#currentDesignation").val(response.staff.designation);
    $("#staffNameDisplay").html(response.staff.name);
    $("#id").val(response.staff._id);
  });
});

$("#promoteBtn").click((event) => {
  event.preventDefault();
  const id = $("#id").val();
  const newDesignation = $("#newDesignation").val();
  const request = {
    url: `${url}/api/staffs/promote/${id}`,
    method: "PUT",
    data: { designation: newDesignation },
  };
  $.ajax(request).done(function (response) {
    $("#modal-title").html(response.message);
    $("#modal-success").modal("show");
  });
});
