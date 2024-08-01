const updateWidthdrawTotal = () => {
  const withdrawInput = getInputValue("withdraw-input");
  if (inputValue === 0) return; // Do not update if the input value is invalid
  const preWithdrawValue = getpreValue("withdraw-total");
  console.log(preWithdrawValue);
  console.log(withdrawInput);
};

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    console.log("Withdraw button clicked");
    updateWidthdrawTotal();
  });
