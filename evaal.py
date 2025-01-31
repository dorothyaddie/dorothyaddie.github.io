precision = np.cumsum(tp) / (np.cumsum(tp) + np.cumsum(fp))
recall = np.cumsum(tp) / num_gt_boxes
# make this curve monotonically decreasing

ap = np.trapz(precision, recall)
return ap
