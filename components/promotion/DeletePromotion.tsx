import { useDeletePromotionMutation } from "@/services/promotionApi";
import React from "react";
import Swal from "sweetalert2";

const DeletePromotion = () => {
  //handle delete
  const [deletePromotion] = useDeletePromotionMutation();
  export const handleDeleteCategory = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Promotion has been deleted.", "success");
        const categoryDel = await deletePromotion(id);
        if (categoryDel) {
          refetch(); // Refetch the user list after deleting a user
        }
      }
    });
  };
};
